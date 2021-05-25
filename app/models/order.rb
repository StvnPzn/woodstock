class Order < ApplicationRecord
  belongs_to :user
  belongs_to :piece

  enum progress: { pending: 0, accepted: 1, refused: 2, delivered: 3 }
end
