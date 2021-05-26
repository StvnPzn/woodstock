class PiecesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :edit]

  def index
    @pieces = Piece.all
  
  end
  
  def show
    @piece = Piece.find(params[:id])
    @editable = !params['editable'].nil?
    # Ici, la show va afficher qqch de different en fct de si oui ou non la piece a ete modif
  end
  
  def create
    @piece = Piece.new(piece_params)
    @user = current_user
    @piece.user = @user
    @category = Category.find(params[:category_id])
    @piece.category = @category
    if piece.save
      redirect_to edit_piece_path(@piece)
    else
      render :new
    end
  end
  
  def edit
    @piece = Piece.find(params[:id])
    @part_top = @piece.parts.find_by(position: 0)
    @part_bottom = @piece.parts.find_by(position: 1)
  end

  def update
    @piece = Piece.find(params[:id])
    @piece.update(piece_params)
  end

  def destroy
    @piece = Piece.find(params[:id])
    @piece.destroy
  end

  def clone
    # TO DO
  end


  private
  def piece_params
    params.require(:piece).permit(:name, :category, :user_id, :photo, :validated)
  end

end
