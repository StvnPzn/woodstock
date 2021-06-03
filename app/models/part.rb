class Part < ApplicationRecord
  belongs_to :piece

  enum color: { black: 0, white: 1, raw: 2, red: 3, blue: 4, grey: 5, light: 6 }
  enum material: { pine: 0, oak: 1,  beech: 2, teak: 3, steel: 4, inox: 5 }
  enum shape: { round: 0, square: 1, rectangular: 2 }
  enum position: { top: 0, bottom: 1 }

  def translated_color
    case color
    when "black" then "Noir"
    when "white" then "Blanc"
    when "raw" then "Nature"
    when "red" then "Rouge"
    when "blue" then "Bleu"
    when "grey" then "Gris"
    when "light" then "Clair"
    end
  end

  def translated_material
    case material
    when "pine" then "Pin"
    when "oak" then "Chêne"
    when "beech" then "Hêtre"
    when "teak" then "Teck"
    when "steel" then "Acier"
    when "inox" then "Inox"
    end
  end

  def translated_shape
    case shape
    when "round" then "Rond"
    when "square" then "Carré"
    when "rectangular" then "Rectangulaire"
    end
  end
end
