class Piece < ApplicationRecord
  belongs_to :user
  belongs_to :category

  has_many :parts, dependent: :destroy
  has_many :orders, dependent: :destroy

  has_one_attached :photo

  def create_parts
    if category.title == "table" && parts.empty?
      parts.build(piece: self, color: 4, height: 10, width: 100, length: 160, material: 2, shape: 1, position: 0).save
      parts.build(piece: self, color: 2, height: 0, width: 6, length: 60, material: 2, shape: 0, position: 1).save
  end
end

  def json_params
    top_part = self.parts.find_by(position: 0)
    bottom_part = self.parts.find_by(position: 1)
    return {
      category: self.category.title,
      topPart: {
        shape: top_part.shape,
        width: top_part.width,
        height: top_part.height,
        length: top_part.length,
        color: top_part.color
      },
      bottomPart: {
        shape: bottom_part.shape,
        topRadius: bottom_part.width,
        bottomRadius: bottom_part.width,
        lengthCylinder: bottom_part.length,
        topWidth: top_part.width,
        topHeight: top_part.height,
        topLength: top_part.length,
        color: bottom_part.color
      }
    }
  end

  def clone_with_associations
    new_piece = self.dup
    self.parts.each do |part|
      new_part = part.dup
      new_piece.parts << new_part
      new_part.save
    end
    new_piece.save
    new_piece
  end


end
