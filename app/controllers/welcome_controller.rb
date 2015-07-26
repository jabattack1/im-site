class WelcomeController < ApplicationController
  def index
  	@announcement = Announcement.all
  	
  end
end