const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["user", "admin"], default: "user"},
    progress:{
        kanto: [{ type: Number, default: [] }],
        johto: [{ type: Number, default: [] }],
        national: [{ type: Number, default: [] }]
    }

}, {timestamps:true});

userSchema.pre('save', async function(next){
    //check if password is modified
    try{
        if(!this.isModified('password')) return next();

        //generate salt and hasht he password
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next(); //save
    }catch(err){
        next(error); //pass error 
    }
})

userSchema.methods.isValidPassword = async function(password) {
    try{
        return await bcrypt.compare(password, this.password);
    }catch(err){
        throw new Error('password comparison failed');
    }
}

module.exports = mongoose.model("User", userSchema)