class Piece < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :parts, dependent: :destroy
  has_many :orders, dependent: :destroy

  has_one_attached :photo

  after_create :create_parts

  def create_parts
    if category.title == "table"
      parts.build(piece: self, color: 2, height: 10, width: 100, length: 160, material: 1, shape: 1, position: 0).save
      parts.build(piece: self, color: 2, height: 10, width: 100, length: 160, material: 1, shape: 1, position: 1).save
    end
  end
end
