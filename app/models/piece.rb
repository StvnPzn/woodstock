class Piece < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :parts, dependent: :destroy
  has_many :orders
end
