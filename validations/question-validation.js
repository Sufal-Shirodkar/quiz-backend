const questionValidationSchema = {
    title:{
        notEmpty:{
            errorMessage:'title is required'
        }
    },
    options: {
        custom: {
            options: value => {
                if (!Array.isArray(value) || value.length === 0) {
                    throw new Error('Options are required enter 4 options');
                }
                return true
            }
            }
        },
    correct:{
        notEmpty:{
            errorMessage:"correct is required"
        }
    },
}
module.exports = questionValidationSchema