const userController = require('../services/service');

class UserController {
    registerUser = (req, res) => {
        try {
            const user = {
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				emailId:req.body.emailId,
				password:req.body.password
			};

            userController.registerUser(user, (err, userData) => {
                if (err) {
					return res.status(500).send({
						sucess:false,
						message: err.message || "Some error occurred"
					});
				}
				else
				{
					res.status(201).send({
						success:true,
						data:userData,
						message:"Registered Successfully"
					});
				}   
			});
        } catch (error) {
            return res.status(500).send({
				success:false,
				message:error.message || "Some error occured",
			});
        }
    }

    loginUser = (req, res) => {
        try {
            const userDetails = ({
                emailId:req.body.emailId,
                password:req.body.password
            });

            userController.loginUser(userDetails, (err, data) => {
                return err ? res.status(400).send({success:false,message:err})
                   : res.status(200).send({success:true,message:"Login Successful",data:data});
            });
        }catch(error) {
            return res.send({ message: error.message });
        }
    }
}

module.exports = new UserController();