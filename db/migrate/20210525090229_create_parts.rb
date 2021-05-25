class CreateParts < ActiveRecord::Migration[6.0]
  def change
    create_table :parts do |t|
      t.references :piece, null: false, foreign_key: true
      t.integer :color
      t.integer :height
      t.integer :width
      t.integer :length
      t.integer :material
      t.integer :shape
      t.integer :position
      t.string :volume_json

      t.timestamps
    end
  end
end
