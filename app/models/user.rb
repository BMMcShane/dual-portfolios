class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true
    validates :email, uniqueness: true

    has_many :projects
end
