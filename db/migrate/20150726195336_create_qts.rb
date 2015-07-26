class CreateQts < ActiveRecord::Migration
  def change
    create_table :qts do |t|
      t.string :message

      t.timestamps null: false
    end
  end
end
