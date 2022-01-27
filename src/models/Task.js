import {Schema,model} from "mongoose"

const taskSchema = new Schema({
    title: {
        type: "string",
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        unique: true,
    },
    done: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false,
})

export default model("task",taskSchema);
