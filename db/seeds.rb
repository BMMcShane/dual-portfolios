puts "Clearing Database 💀💀💀"
User.destroy_all
Link.destroy_all
Project.destroy_all
Award.destroy_all
Language.destroy_all
ProjectLanguage.destroy_all

puts "Seeding Database 🌱🍃🌱🍃🌱🍃"

puts "Creating Users 👤"
# Elliot
User.create(name: "Elliot Mangini", username: "elliotmangini", bio: "sample bio", img_url: "https://pbs.twimg.com/profile_images/1563896122292465665/No1oJcdm_400x400.jpg", email: "elliot.mangini@gmail.com", password_digest: "1234")
Link.create(user_id: User.first, name: "LinkedIn", url: "https://www.linkedin.com/in/elliotmangini/")
# Ben
User.create(name: "Ben McShane", username: "benmcshane", bio: "sample bio", img_url: "test", email: "test", password_digest: "1234")
Link.create(user_id: User.second, name: "LinkedIn", url: "https://www.linkedin.com/in/benjamin-mcshane/")

puts "Creating Projects 🗒"
# Elliot
Project.create(user_id: User.first, title: "174", description: "drum machine", timeframe: "Two Weeks - August 2022")
Award.create(project_id: User.first.projects.first, name: "cool project aware")
# Ben
Project.create(user_id: User.second, title: "test", description: "test", timeframe: "test")
Award.create(project_id: User.second.projects.first, name: "very cool project award")

puts "Creating Languages 👾"
Language.create(name: "JavaScript")
Language.create(name: "HTML")
Language.create(name: "CSS")
Language.create(name: "React")
Language.create(name: "Ruby")
Language.create(name: "Rails")
Language.create(name: "SQL")

puts "Linking Projects and Languages 🤝"
ProjectLanguage.create(project_id: User.first.projects.first, language_id: Language.find_by(name: "CSS"))
ProjectLanguage.create(project_id: User.first.projects.first, language_id: Language.find_by(name: "HTML"))
ProjectLanguage.create(project_id: User.first.projects.first, language_id: Language.find_by(name: "Javascript"))

puts "Database Seeded ✅✅✅✅✅✅"