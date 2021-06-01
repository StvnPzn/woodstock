class OrdersController < ApplicationController
  # ligne ci-dessous a enlever !!!!!!!!!!!!!!! ONLY FOR TESTS PURPOSES
  skip_before_action :authenticate_user!, only: :show
  # ligne ci-dessus a enlever !!!!!!!!!!!!!!!

  def create
    @order = Order.new(progress: 0)
    @order.user_id = current_user.id
    @order.piece_id = params[:piece_id]
    if @order.save
      redirect_to order_path(@order)
    else
      redirect_to edit_piece_path(params[:piece_id])
    end
  end

  def show
    @order = Order.find(params[:id])
    @top = @order.piece.parts.find_by_position(0)
    @bottom = @order.piece.parts.find_by_position(1)
  end
end
