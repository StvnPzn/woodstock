class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
    tables = Category.where(title: "table")
    commodes = Category.where(title: "commode")
    chaises = Category.where(title: "chaise")
    buffets = Category.where(title: "buffet")
    bibliotheques = Category.where(title: "bibliothèque")
    meuble_tvs = Category.where(title: "meuble tv")
  end
end
