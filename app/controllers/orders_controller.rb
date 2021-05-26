class OrdersController < ApplicationController
  # ligne ci-dessous a enlever !!!!!!!!!!!!!!!
  skip_before_action :authenticate_user!, only: :show
  # ligne ci-dessus a enlever !!!!!!!!!!!!!!!

  def show
    @order = Order.find(params[:id])
  end
end
 