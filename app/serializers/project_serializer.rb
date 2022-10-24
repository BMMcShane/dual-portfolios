class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :timeframe, :route
  has_many :awards
  has_many :languages
  # has_many :project_languages
  # has_many :languages, through: :project_languages
end
