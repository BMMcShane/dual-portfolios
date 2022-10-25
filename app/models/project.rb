class Project < ApplicationRecord
  belongs_to :user
  has_many :awards, dependent: :destroy
  has_many :project_languages, dependent: :destroy
  has_many :languages, through: :project_languages
end
