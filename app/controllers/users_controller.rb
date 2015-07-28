class UsersController < ApplicationController

  def index
  

  end

def create
	
	if (params["full_name"].empty?)
		flash.now[:alert] = 'Please fill out your name!' 
	elsif (params["email_address"].empty?)
		flash.now[:alert] = 'Please fill out your email!' 
	elsif (params["subject"].empty?)
		flash.now[:alert] = 'Please fill out your subject!' 
	elsif (params["message_box"].empty?)	
		flash.now[:alert] = 'Please fill out your message content!' 
	else	

    	userNew = User.create({
        name: params["full_name"],
        email: params["email_address"],
        subject: params["subject"],
        message: params["message_box"]
      })

      UserNotifier.send_signup_email(userNew).deliver
      UserNotifier.send_signup(userNew).deliver
      
      redirect_to '/'
    end
  end

end