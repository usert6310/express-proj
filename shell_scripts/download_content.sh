while getopts ":u:" opt; do
    case $opt in 
        u) url=$OPTARG 
    esac 
done

# Get file name and extension to be used in later checks
filename_and_extension=$(basename $url)
file_name="${filename_and_extension%.*}"
extension="${filename_and_extension##*.}"


# Check the file is of the type doc,md or txt. Exit code 1 if non supported file type is used
case $extension in
    doc | txt | md)
        timestamp=$(date +%s)
        name=$file_name
        contents="$(curl "$url")" 
        ;;
    *)
        echo "Non supported file type. Must be md/doc/txt"
        exit 1;;
esac


# Check filename to ensure no illegal characters have been included. Exit if true
filename_regex='^[a-zA-Z0-9_]*$'
if [[ $file_name =~ $filename_regex ]]
    then
        :
    else
        echo "Filename contains illegal characters"
        exit 1
fi

# Check if the file already exists. Exit with failure if true
if [ -f ./text_files/$file_name.txt ]
then   
    echo "File already exists. Aborting"
    exit 1
fi


# Download the file to the text_files directory
curl -o ./text_files/$file_name.txt $url


# Get number of lines of download file
file_length=`wc -l < ./text_files/$file_name.txt`

lines_check=1
# Compare the number of lines against set boundary, if less than boundary, delete file and exit 1
if [[ $file_length -lt $lines_check ]] 
    then
        echo "File empty. Aborting"
        rm -f ./text_files/$file_name.txt
        exit 1
fi


