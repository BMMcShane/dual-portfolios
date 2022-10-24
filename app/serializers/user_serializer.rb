class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :bio, :img_url, :email
  has_many :projects
  has_many :links
end
