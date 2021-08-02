import Joi from "joi";

export default Joi.object({
  status: Joi.string().default("unassigned")
});
