class UserSerializer < ActiveModel::Serializer
  attributes :username, :name, :bio, :img_url, :email
  has_many :projects
  has_many :links
end
