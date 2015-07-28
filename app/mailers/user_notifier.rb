class UserNotifier < ActionMailer::Base
  default :from => 'hello@nfcimplus.com'

  # send a signup email to the user, pass in the user object that   contains the user's email address
  def send_signup_email(user)
    @user = user
    mail( :to => @user.email,
    :subject => 'Thank you for contacting IM!' )
  end

  def send_signup(user)
    @user = user
    mail( :to => 'peter.hahn@live.com',
    :subject => @user.subject)
  end
end
