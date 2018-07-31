var configValues=require("./config");

module.exports={
    getDbConnectionString:function(){
        return `mongodb://${configValues.username}:${configValues.password}@ds259351.mlab.com:59351/todos`;
    }
}