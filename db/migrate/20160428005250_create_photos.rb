class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :photo_url, null: false
      t.integer :user_id, null: false
      t.integer :album_id
      t.timestamps null: false
    end

    add_index :photos, :user_id
    add_index :photos, :album_id
  end
end
