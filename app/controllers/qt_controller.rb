class QtController < ApplicationController

  def index
  	if session[:user_id]
 	@announcement = Announcement.all
 	else
      redirect_to '/admins'
    end
  end

  def update
    qt_item = Qt.find(params[:id])
    qt_item.update({
    message: params["message"],
    })

  redirect_to "/daily"

  end

end