class Category < ApplicationRecord

  has_many :pieces, dependent: :destroy
end
