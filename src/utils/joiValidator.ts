import Joi from 'joi';

type WithoutNullableKeys<T> = {
  [Key in keyof T]-?: WithoutNullableKeys<NonNullable<T[Key]>>;
};

export const joiValidator = <K extends object>(
  obj: K,
): WithoutNullableKeys<K> => {
  const schemaObject = Object.keys(obj).reduce((acc, key) => {
    return {
      ...acc,
      [key]: Joi.required(),
    };
  }, {});

  const schema = Joi.object({ ...schemaObject })
    .unknown(true)
    .validate(obj);

  if (schema.error) {
    throw new Error(`Missing environment key: ${schema.error.message}`);
  }

  return obj as WithoutNullableKeys<K>;
};
