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
elliot = User.create(name: "Elliot Mangini", username: "elliotmangini", bio: "sample bio", img_url: "https://pbs.twimg.com/profile_images/1563896122292465665/No1oJcdm_400x400.jpg", email: "elliot.mangini@gmail.com", password: "1234")
# Link.create(user_id: User.first.id, name: "LinkedIn", url: "https://www.linkedin.com/in/elliotmangini/")
# Ben
User.create(name: "Ben McShane", username: "benmcshane", bio: "sample bio", img_url: "test", email: "test", password: "1234")
# Link.create(user_id: User.second.id, name: "LinkedIn", url: "https://www.linkedin.com/in/benjamin-mcshane/")

puts "Creating Projects 🗒"
# Elliot
upquest = Project.create(user_id: User.first.id, title: "UpQuest!", description: "Track your fun", timeframe: "One Week - Oct. 2022", route: "UpQuest")
mountain = Project.create(user_id: User.first.id, title: "Mountain!", description: "A Better To Do List", timeframe: "One Week - Sept. 2022", route: "Mountain")
foley = Project.create(user_id: User.first.id, title: "Foley Generator 3000!", description: "Foley Assistant", timeframe: "One Week - Sept. 2022", route: "Mountain")
wunseventy = Project.create(user_id: User.first.id, title: "174!", description: "drum machine", timeframe: "Two Weeks - Aug 2022", route: "174")
# Ben
Project.create(user_id: User.second.id, title: "test", description: "test", timeframe: "test", route: "ProjectOne")
Award.create(project_id: User.second.projects.first.id, name: "very cool project award")

puts "Creating Languages 👾"
js = Language.create(name: "JavaScript")
html = Language.create(name: "HTML")
css = Language.create(name: "CSS")
react = Language.create(name: "React")
ruby = Language.create(name: "Ruby")
rails = Language.create(name: "Rails")
sql = Language.create(name: "SQL")
sinatra = Language.create(name: "Sinatra")

puts "Linking Projects and Languages 🤝"
ProjectLanguage.create(project_id: upquest.id, language_id: css.id)
ProjectLanguage.create(project_id: upquest.id, language_id: ruby.id)
ProjectLanguage.create(project_id: upquest.id, language_id: react.id)
ProjectLanguage.create(project_id: upquest.id, language_id: sinatra.id)
ProjectLanguage.create(project_id: upquest.id, language_id: sql.id)

ProjectLanguage.create(project_id: mountain.id, language_id: react.id)
ProjectLanguage.create(project_id: mountain.id, language_id: css.id)
ProjectLanguage.create(project_id: mountain.id, language_id: html.id)

ProjectLanguage.create(project_id: foley.id, language_id: js.id)
ProjectLanguage.create(project_id: foley.id, language_id: css.id)
ProjectLanguage.create(project_id: foley.id, language_id: html.id)

ProjectLanguage.create(project_id: wunseventy.id, language_id: js.id)
ProjectLanguage.create(project_id: wunseventy.id, language_id: css.id)
ProjectLanguage.create(project_id: wunseventy.id, language_id: html.id)

puts "Database Seeded ✅✅✅✅✅✅"