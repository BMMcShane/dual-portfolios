class Language < ApplicationRecord
    has_many :project_languages, dependent: :destroy
    has_many :projects, through: :project_languages
end
