from flask import Flask, render_template, send_from_directory # type: ignore

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route('/')
def homepage():
    return render_template('views/homepage.html')
    
@app.route('/about')
def about():
    return render_template('views/about.html')

@app.route('/contact')
def contact():
    return render_template('views/contact.html')

@app.route('/contributing')
def contributing():
    return render_template('views/contributing.html')

@app.route('/guides')
def guides():
    return render_template('views/guides.html')

@app.route('/guides/html-css')
def htmlcss():
    return render_template('views/guides/htmlcss.html')

@app.route('/guides/flask')
def flask():
    return render_template('views/guides/flask.html')

@app.route('/guides/redis')
def redis():
    return render_template('views/guides/redis.html')

@app.route('/licensing')
def licensing():
    return render_template('views/licensing.html')

@app.route('/privacy')
def privacy():
    return render_template('views/privacy.html')

@app.route('/tools')
def tools():
    return render_template('views/tools.html')

@app.route('/tools/html-elements')
def htmlelements():
    return render_template('views/tools/html-elements.html')

@app.route('/tools/css-properties')
def cssproperties():
    return render_template('views/tools/css-properties.html')


@app.route("/robots.txt")
def robots():
    return send_from_directory("./static", "robots.txt")
 
@app.route("/sitemap.xml")
def sitemap():
    return send_from_directory("./static", "sitemap.xml")

if __name__ == '__main__':
	app.run(debug=True)
 
 