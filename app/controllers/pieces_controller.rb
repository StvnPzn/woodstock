class PiecesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :edit]

  def index
    @pieces = Piece.joins(:category).where("categories.title ILIKE ?", "#{params[:query]}")
  end

  def show
    @piece = Piece.find(params[:id])
    @editable = !params['editable'].nil?
  end

  def create
    @piece = Piece.new(name: "Votre objet #{current_user.pieces.count}")
    @user = current_user
    @piece.user = @user
    @category = Category.find(params[:category_id]) #Faire le lien entre piece et category grâce à la modal (cf: methode de l'index)
    @piece.category = @category
    if @piece.save
      redirect_to edit_piece_path(@piece)
    else
      render :index
    end
  end

  def edit
    @piece = Piece.find(params[:id])
    @part_top = @piece.parts.find_by(position: 0)
    @part_bottom = @piece.parts.find_by(position: 1)
  end

  def update
    @piece = Piece.find(params[:id])
    @part_top = @piece.parts.find_by(position: 0)
    @part_bottom = @piece.parts.find_by(position: 1)
    @part_top = @part_top.update
    @part_bottom = @part_bottom.update
    @piece.update(piece_params)
  end

  def destroy
    @piece = Piece.find(params[:id])
    @piece.destroy
    redirect_to dashboard_path
  end

  def clone
    @piece = Piece.find(params[:id])
    @copy_piece = @piece.clone
    @part_top = @copy_piece.parts.find_by(position: 0)
    @part_bottom = @copy_piece.parts.find_by(position: 1)
    render :edit
  end
end
