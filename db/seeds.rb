puts "Clearing Database 💀💀💀"
User.destroy_all
# Link.destroy_all
Project.destroy_all
Award.destroy_all
Language.destroy_all
ProjectLanguage.destroy_all

puts "Seeding Database 🌱🍃🌱🍃🌱🍃"

puts "Creating Users 👤"
# Elliot
User.create(name: "Elliot Mangini", username: "elliotmangini", bio: "sample bio", img_url: "https://pbs.twimg.com/profile_images/1563896122292465665/No1oJcdm_400x400.jpg", email: "elliot.mangini@gmail.com", password: "1234")
# Link.create(user_id: User.first.id, name: "LinkedIn", url: "https://www.linkedin.com/in/elliotmangini/")
# Ben
User.create(name: "Ben McShane", username: "benmcshane", bio: "sample bio", img_url: "test", email: "test", password: "1234")
# Link.create(user_id: User.second.id, name: "LinkedIn", url: "https://www.linkedin.com/in/benjamin-mcshane/")

puts "Creating Projects 🗒"
# Elliot
Project.create(user_id: User.first.id, title: "174!", description: "drum machine", timeframe: "Two Weeks - August 2022", route: "174")
Award.create(project_id: User.first.projects.first.id, name: "cool project award")
# Ben
Project.create(user_id: User.second.id, title: "test", description: "test", timeframe: "test", route: "ProjectOne")
Award.create(project_id: User.second.projects.first.id, name: "very cool project award")

puts "Creating Languages 👾"
Language.create(name: "JavaScript")
Language.create(name: "HTML")
Language.create(name: "CSS")
Language.create(name: "React")
Language.create(name: "Ruby")
Language.create(name: "Rails")
Language.create(name: "SQL")

puts "Linking Projects and Languages 🤝"
ProjectLanguage.create(project_id: User.first.projects.first.id, language_id: Language.find_by(name: "CSS").id)
ProjectLanguage.create(project_id: User.first.projects.first.id, language_id: Language.find_by(name: "HTML").id)
ProjectLanguage.create(project_id: User.first.projects.first.id, language_id: Language.find_by(name: "JavaScript").id)

puts "Database Seeded ✅✅✅✅✅✅"