class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :pieces
  has_many :orders
  has_many :parts, through: :pieces
  has_one_attached :avatar

  enum role: { craftman: 0, client: 1 }
end
