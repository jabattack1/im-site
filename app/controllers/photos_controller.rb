class PhotosController < ApplicationController

  def index
  
  @photo = Photo.all

 	@photo_table = []
 

  # @appetizers = @menu.select do |food|
  #   food.course == "Appetizers"
  # end

 	@photo.each do |p|

 			@photo_table.push(p)
 		
 	end
 		
 	
  end

end