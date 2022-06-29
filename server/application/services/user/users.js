const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { users } = require('../../../models');
const bcrypt = require('bcrypt');
const Password = require("node-php-password");
const { response } = require('express');
const { generateWhereCondition } = require("../../utilities/helper/dbHelper");
dotenv.config();
function generateAccessToken(userId) {
   return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '84000s' });
} 

const login = async (data) => {
   try {
      const result = await users.findOne({
         where: { email: data.email },
         include: [{ 
            model: crm_user_profiles, as: 'profile',
            include : [
               { model: crm_organizations, required: true, as: 'organization' }
            ],
         }]
      });
      if(result && Password.verify(data.password,result.password)){
         const token = generateAccessToken({ uid: result.uniqueId });
         data = {
            profile_id : result.profile.id,
            uid : result.uniqueId,
            org_uid : result.profile.organization.org_unique_id,
            _token : token,
         };
         return { response : data }
      }else{
         return { error : "Invalid Credentials" };
      }
   } catch (error) {
      return { error }
   }
}
module.exports = {
   login
}