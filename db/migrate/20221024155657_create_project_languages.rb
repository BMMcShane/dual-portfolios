class CreateProjectLanguages < ActiveRecord::Migration[7.0]
  def change
    create_table :project_languages do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.belongs_to :language, null: false, foreign_key: true

      t.timestamps
    end
  end
end
