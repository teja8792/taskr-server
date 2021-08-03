import Joi from "joi";

export default Joi.object({
  status: Joi.string().default("unassigned"),
  pickup: Joi.object({
    datetime: Joi.string().default(Date.now())
  }),
  drop: Joi.any(),
  has_pickup: Joi.bool().default(false),
  has_drop: Joi.bool().default(false)
});
