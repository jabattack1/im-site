class DailyController < ApplicationController

  def index
  	if session[:user_id]
 	@announcement = Announcement.all
 	@qt = Qt.all
 	else
      redirect_to '/admins'
    end
  end

  def update
    announcement_item = Announcement.find(params[:id])
    announcement_item.update({
    message: params["message"],
    })

  redirect_to "/daily"

  end

end