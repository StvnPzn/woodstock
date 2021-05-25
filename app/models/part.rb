class Part < ApplicationRecord
  belongs_to :piece

  enum color: { black: 0, white: 1, raw: 2, red: 3, blue: 4, grey: 5 }
  enum material: { pine: 0, oak: 1,  beech: 2, teak: 3, steel: 4, inox: 5 }
  enum shape: { round: 0, square: 1, rectangular: 2 }
  enum position: { top: 0, bottom: 1 }
end
