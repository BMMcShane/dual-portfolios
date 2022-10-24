class Language < ApplicationRecord
    has_many :project_languages, dependent: :destroy
end
