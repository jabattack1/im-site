class DailyPageController < ApplicationController

  def index
 	@announcement = Announcement.all
 	@qt = Qt.all
 	# binding.pry
  end

  # def update
  #   announcement_item = Announcement.find(params[:id])
  #   announcement_item.update({
  #   message: params["message"],
  #   })

  # redirect_to "/admins"

  # end

end