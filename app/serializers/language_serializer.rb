class LanguageSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :projects
  # has_many :project_languages
  # has_many :projects, through: :project_languages
end
