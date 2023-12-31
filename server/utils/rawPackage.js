const { DESCRIPTION_URL } = process.env;

const rawPackageInfo = (packageObj) => {
	if (packageObj.latestVersion && packageObj.latestVersion.raw) {
		const rawInfo = {
			"Package": packageObj.identifier,
			"Version": packageObj.latestVersion.version,
			"Architecture": packageObj.latestVersion.raw["architecture"],
			"Maintainer": packageObj.latestVersion.raw["maintainer"] || undefined,
			"Installed-Size": packageObj.latestVersion.raw["installedSize"],
			"Depends": packageObj.latestVersion.raw["depends"] || undefined,
			"Conflicts": packageObj.latestVersion.raw["conflicts"] || undefined,
			"Filename": packageObj.latestVersion.raw["filename"],
			"Size": packageObj.latestVersion.raw["size"],
			"MD5sum": packageObj.latestVersion.raw["md5sum"],
			"SHA1": packageObj.latestVersion.raw["sha1"],
			"SHA256": packageObj.latestVersion.raw["sha256"],
			"Section": packageObj.latestVersion.raw["section"] || undefined,
			"Author": packageObj.latestVersion.raw["author"] || undefined,
			"Description": packageObj.shortDescription,
			"Depiction": `${DESCRIPTION_URL}/${packageObj.identifier}`,
			"Name": packageObj.name
		}
		
		packageObj.latestVersion.raw = rawInfo;
	}
	
	return packageObj;
}

const rawPackagesInfo = (packages) => {
	packages.map(packageObj => rawPackageInfo(packageObj));
	return packages;
}

module.exports = {
	rawPackageInfo: rawPackageInfo,
	rawPackagesInfo: rawPackagesInfo
}