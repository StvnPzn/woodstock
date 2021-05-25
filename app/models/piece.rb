class Piece < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :parts, dependent: :destroy
  has_many :orders, dependent: :destroy

  after_create :create_parts

def create_parts
#   if self.category == "chaise"
#     Part.create(toutes les spécificités du top d'une chaise)
#     Part.create((toutes les spécificités du top d'une chaise, piece: self)
#   elsif
end

end
