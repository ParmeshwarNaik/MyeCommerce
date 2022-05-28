if(process.env.NODE_ENV !='production'){
    require('dotenv').config;

}

module.require={
    PORT:process.env.PORT
}