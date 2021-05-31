class AddDescriptionToPieces < ActiveRecord::Migration[6.0]
  def change
    add_column :pieces, :description, :string
  end
end
