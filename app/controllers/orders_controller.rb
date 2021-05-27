class OrdersController < ApplicationController
  # ligne ci-dessous a enlever !!!!!!!!!!!!!!!
  skip_before_action :authenticate_user!, only: :show
  # ligne ci-dessus a enlever !!!!!!!!!!!!!!!

  def create
    @order = Order.new(order_params)
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
  end

  private

  def order_params
    params.require(:order).permit(:progress, :price)
  end

end
