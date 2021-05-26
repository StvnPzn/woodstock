class PartsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]
  
  def create
    @piece = Piece.find(params[:piece_id])
    @part = Part.new(part_params)
    @part.piece = @piece
    if @part.save
      #redirect_to ?
    else
      render
    end
  end

  def update
    @part = Part.find(params[:id])
    @part.update(part_params)
    
    redirect_to piece_path(editable: true)
  end

  private

  def part_params
    params.require(:part).permit(:color, :height, :width, :length, :material, :shape, :position, :piece_id, :volume_json)
    # ADD VOLUME 
  end
end
